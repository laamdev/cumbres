import { peaksJson } from "../data/peaksJson"
import { prisma } from "../lib/client"

async function main() {
  await Promise.all([prisma.summit.deleteMany({}), prisma.peak.deleteMany({})])
  await prisma.peak.createMany({ data: peaksJson })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
