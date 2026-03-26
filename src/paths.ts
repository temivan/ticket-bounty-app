import type { Route } from "next";

export const homePath = () => "/" as Route;

export const ticketsPath = () => "/tickets" as Route;
export const ticketPath = (id: string) => `/tickets/${id}` as Route;
