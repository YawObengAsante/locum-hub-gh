import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function seed() {
  console.log("🌱 Seeding database...");
  await prisma.user.createMany({
    data: [
      {
        id: "somestringid1",
        name: "yaw",
        email: "yaw@email.com",
        emailVerified: true,
      },
      {
        id: "somestringid2",
        name: "derrick",
        email: "derrick@email.com",
        emailVerified: true,
      },
      {
        id: "somestringid3",
        name: "jackie",
        email: "jackie@email.com",
        emailVerified: true,
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
