import { 
  users, 
  tracks, 
  shows, 
  merchandise, 
  galleryImages,
  type User, 
  type InsertUser,
  type Track,
  type Show,
  type Merchandise,
  type GalleryImage,
  type InsertTrack,
  type InsertShow,
  type InsertMerchandise,
  type InsertGalleryImage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Tracks
  getAllTracks(): Promise<Track[]>;
  getTrackById(id: number): Promise<Track | undefined>;
  getFeaturedTrack(): Promise<Track | undefined>;
  createTrack(track: InsertTrack): Promise<Track>;
  
  // Shows
  getAllShows(): Promise<Show[]>;
  getShowById(id: number): Promise<Show | undefined>;
  createShow(show: InsertShow): Promise<Show>;
  
  // Merchandise
  getAllMerchandise(): Promise<Merchandise[]>;
  getMerchandiseById(id: number): Promise<Merchandise | undefined>;
  createMerchandise(merchandise: InsertMerchandise): Promise<Merchandise>;
  
  // Gallery
  getAllGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImageById(id: number): Promise<GalleryImage | undefined>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private tracks: Map<number, Track>;
  private shows: Map<number, Show>;
  private merchandise: Map<number, Merchandise>;
  private galleryImages: Map<number, GalleryImage>;
  private currentUserId: number;
  private currentTrackId: number;
  private currentShowId: number;
  private currentMerchandiseId: number;
  private currentGalleryImageId: number;

  constructor() {
    this.users = new Map();
    this.tracks = new Map();
    this.shows = new Map();
    this.merchandise = new Map();
    this.galleryImages = new Map();
    this.currentUserId = 1;
    this.currentTrackId = 1;
    this.currentShowId = 1;
    this.currentMerchandiseId = 1;
    this.currentGalleryImageId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample tracks
    const sampleTracks: InsertTrack[] = [
      {
        title: "Soul of Uganda",
        duration: "4:32",
        description: "A powerful anthem celebrating the rich cultural heritage and musical traditions of Uganda, blending traditional rhythms with contemporary sounds.",
        releaseDate: "March 2024",
        spotifyUrl: "https://spotify.com",
        appleMusicUrl: "https://music.apple.com",
        youtubeUrl: "https://youtube.com",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
        isFeatured: true,
      },
      {
        title: "Rhythm of Home",
        duration: "3:45",
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        isFeatured: false,
      },
      {
        title: "Moonlight Serenade",
        duration: "4:12",
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        isFeatured: false,
      },
      {
        title: "Dance of Joy",
        duration: "3:28",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        isFeatured: false,
      },
    ];

    sampleTracks.forEach(track => {
      this.createTrack(track);
    });

    // Sample shows
    const sampleShows: InsertShow[] = [
      {
        venue: "Kampala Music Festival",
        location: "National Theatre, Kampala, Uganda",
        date: "MAY 15",
        time: "8:00 PM",
        description: "Special headlining performance featuring new tracks and fan favorites",
        ticketUrl: "https://tickets.com",
      },
      {
        venue: "East African Music Awards",
        location: "Serena Conference Centre, Kampala",
        date: "JUN 22",
        time: "7:30 PM",
        description: "Performance and nomination celebration for Best New Artist",
        ticketUrl: "https://tickets.com",
      },
      {
        venue: "Nyege Nyege Festival",
        location: "Jinja, Uganda",
        date: "SEP 14",
        time: "9:00 PM",
        description: "International showcase at Uganda's premier music festival",
        ticketUrl: "https://tickets.com",
      },
    ];

    sampleShows.forEach(show => {
      this.createShow(show);
    });

    // Sample merchandise
    const sampleMerchandise: InsertMerchandise[] = [
      {
        name: '"Soul of Uganda" Album',
        description: "Digital Download + Physical CD",
        price: "$15.99",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        category: "album",
        inStock: true,
      },
      {
        name: "Cabana Logo T-Shirt",
        description: "100% Cotton, Multiple Sizes",
        price: "$25.99",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        category: "clothing",
        inStock: true,
      },
      {
        name: "Limited Edition Vinyl",
        description: "180g Vinyl, Gatefold Sleeve",
        price: "$35.99",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        category: "vinyl",
        inStock: true,
      },
      {
        name: "Premium Hoodie",
        description: "Organic Cotton Blend",
        price: "$45.99",
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
        category: "clothing",
        inStock: true,
      },
    ];

    sampleMerchandise.forEach(item => {
      this.createMerchandise(item);
    });

    // Sample gallery images
    const sampleGalleryImages: InsertGalleryImage[] = [
      {
        title: "Live Performance",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "performance",
      },
      {
        title: "Studio Portrait",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "portrait",
      },
      {
        title: "Concert Stage",
        imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "performance",
      },
      {
        title: "Acoustic Session",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "studio",
      },
      {
        title: "Recording Studio",
        imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "studio",
      },
      {
        title: "Crowd Interaction",
        imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
        category: "performance",
      },
    ];

    sampleGalleryImages.forEach(image => {
      this.createGalleryImage(image);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Track methods
  async getAllTracks(): Promise<Track[]> {
    return Array.from(this.tracks.values());
  }

  async getTrackById(id: number): Promise<Track | undefined> {
    return this.tracks.get(id);
  }

  async getFeaturedTrack(): Promise<Track | undefined> {
    return Array.from(this.tracks.values()).find(track => track.isFeatured);
  }

  async createTrack(insertTrack: InsertTrack): Promise<Track> {
    const id = this.currentTrackId++;
    const track: Track = { ...insertTrack, id };
    this.tracks.set(id, track);
    return track;
  }

  // Show methods
  async getAllShows(): Promise<Show[]> {
    return Array.from(this.shows.values());
  }

  async getShowById(id: number): Promise<Show | undefined> {
    return this.shows.get(id);
  }

  async createShow(insertShow: InsertShow): Promise<Show> {
    const id = this.currentShowId++;
    const show: Show = { ...insertShow, id };
    this.shows.set(id, show);
    return show;
  }

  // Merchandise methods
  async getAllMerchandise(): Promise<Merchandise[]> {
    return Array.from(this.merchandise.values());
  }

  async getMerchandiseById(id: number): Promise<Merchandise | undefined> {
    return this.merchandise.get(id);
  }

  async createMerchandise(insertMerchandise: InsertMerchandise): Promise<Merchandise> {
    const id = this.currentMerchandiseId++;
    const merchandise: Merchandise = { ...insertMerchandise, id };
    this.merchandise.set(id, merchandise);
    return merchandise;
  }

  // Gallery methods
  async getAllGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }

  async getGalleryImageById(id: number): Promise<GalleryImage | undefined> {
    return this.galleryImages.get(id);
  }

  async createGalleryImage(insertGalleryImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.currentGalleryImageId++;
    const galleryImage: GalleryImage = { ...insertGalleryImage, id };
    this.galleryImages.set(id, galleryImage);
    return galleryImage;
  }
}

export const storage = new MemStorage();
