import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTrackSchema, insertShowSchema, insertMerchandiseSchema, insertGalleryImageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Track routes
  app.get("/api/tracks", async (req, res) => {
    try {
      const tracks = await storage.getAllTracks();
      res.json(tracks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tracks" });
    }
  });

  app.get("/api/tracks/featured", async (req, res) => {
    try {
      const featuredTrack = await storage.getFeaturedTrack();
      if (!featuredTrack) {
        return res.status(404).json({ message: "No featured track found" });
      }
      res.json(featuredTrack);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured track" });
    }
  });

  app.get("/api/tracks/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const track = await storage.getTrackById(id);
      if (!track) {
        return res.status(404).json({ message: "Track not found" });
      }
      res.json(track);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch track" });
    }
  });

  app.post("/api/tracks", async (req, res) => {
    try {
      const validatedData = insertTrackSchema.parse(req.body);
      const track = await storage.createTrack(validatedData);
      res.status(201).json(track);
    } catch (error) {
      res.status(400).json({ message: "Invalid track data" });
    }
  });

  // Show routes
  app.get("/api/shows", async (req, res) => {
    try {
      const shows = await storage.getAllShows();
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch shows" });
    }
  });

  app.get("/api/shows/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const show = await storage.getShowById(id);
      if (!show) {
        return res.status(404).json({ message: "Show not found" });
      }
      res.json(show);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch show" });
    }
  });

  app.post("/api/shows", async (req, res) => {
    try {
      const validatedData = insertShowSchema.parse(req.body);
      const show = await storage.createShow(validatedData);
      res.status(201).json(show);
    } catch (error) {
      res.status(400).json({ message: "Invalid show data" });
    }
  });

  // Merchandise routes
  app.get("/api/merchandise", async (req, res) => {
    try {
      const merchandise = await storage.getAllMerchandise();
      res.json(merchandise);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch merchandise" });
    }
  });

  app.get("/api/merchandise/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const merchandise = await storage.getMerchandiseById(id);
      if (!merchandise) {
        return res.status(404).json({ message: "Merchandise not found" });
      }
      res.json(merchandise);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch merchandise" });
    }
  });

  app.post("/api/merchandise", async (req, res) => {
    try {
      const validatedData = insertMerchandiseSchema.parse(req.body);
      const merchandise = await storage.createMerchandise(validatedData);
      res.status(201).json(merchandise);
    } catch (error) {
      res.status(400).json({ message: "Invalid merchandise data" });
    }
  });

  // Gallery routes
  app.get("/api/gallery", async (req, res) => {
    try {
      const galleryImages = await storage.getAllGalleryImages();
      res.json(galleryImages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery images" });
    }
  });

  app.get("/api/gallery/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const galleryImage = await storage.getGalleryImageById(id);
      if (!galleryImage) {
        return res.status(404).json({ message: "Gallery image not found" });
      }
      res.json(galleryImage);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery image" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.parse(req.body);
      const galleryImage = await storage.createGalleryImage(validatedData);
      res.status(201).json(galleryImage);
    } catch (error) {
      res.status(400).json({ message: "Invalid gallery image data" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, inquiryType, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }

      // Here you would typically send an email or save to database
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", { name, email, inquiryType, message });
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
