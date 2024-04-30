import { text, pgTable, serial } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
});

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  xp: text("xp").notNull(),
  name: text("name").notNull(),
  classeId: serial('classeId').notNull().references(() => classes.id),
  playerId: serial('playerId').notNull().references(() => players.id),
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  power: text("power").notNull(),
  hp: text("hp").notNull(),
});