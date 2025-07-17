import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const tracks = pgTable("tracks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  description: text("description"),
  releaseDate: text("release_date"),
  spotifyUrl: text("spotify_url"),
  appleMusicUrl: text("apple_music_url"),
  youtubeUrl: text("youtube_url"),
  imageUrl: text("image_url"),
  audioUrl: text("audio_url"),
  videoUrl: text("video_url"),
  isFeatured: boolean("is_featured").default(false),
});

export const shows = pgTable("shows", {
  id: serial("id").primaryKey(),
  venue: text("venue").notNull(),
  location: text("location").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  description: text("description"),
  ticketUrl: text("ticket_url"),
  price: text("price"),
});

export const merchandise = pgTable("merchandise", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  imageUrl: text("image_url"),
  category: text("category"), // album, clothing, vinyl, etc.
  inStock: boolean("in_stock").default(true),
});

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  category: text("category"), // performance, studio, portrait, etc.
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTrackSchema = createInsertSchema(tracks).omit({
  id: true,
});

export const insertShowSchema = createInsertSchema(shows).omit({
  id: true,
});

export const insertMerchandiseSchema = createInsertSchema(merchandise).omit({
  id: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Track = typeof tracks.$inferSelect;
export type Show = typeof shows.$inferSelect;
export type Merchandise = typeof merchandise.$inferSelect;
export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertTrack = z.infer<typeof insertTrackSchema>;
export type InsertShow = z.infer<typeof insertShowSchema>;
export type InsertMerchandise = z.infer<typeof insertMerchandiseSchema>;
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
