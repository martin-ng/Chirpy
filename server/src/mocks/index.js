import faker from "faker";

import Chirp from "../models/Chirp";

const CHIRPS_TOTAL = 10;

export default async () => {
  try {
    await Chirp.deleteMany();

    await Array.from({ length: CHIRPS_TOTAL }).forEach(async () => {
      await Chirp.create({ text: faker.lorem.paragraphs(1) });
    });
  } catch (error) {
    throw error;
  }
};
