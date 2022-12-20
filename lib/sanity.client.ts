import { createClient } from "next-sanity";

export const projectId = '1y03cnqr';
export const dataset = 'production';
const apiVersion = '2022-11-05';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});