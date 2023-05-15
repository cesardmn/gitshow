// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// const methods = {
//   GET: async (req, res) => {
//     if (req.url === '/api/users') {
//       const users = await prisma.user.findMany()
//       res.status(200).json(users)
//     } else if (req.url.startsWith('/api/users/')) {
//       const id = req.url.slice('/api/users/'.length)
//       const user = await prisma.user.findUnique({
//         where: { id: Number(id) },
//       })
//       if (!user) {
//         res.status(404).json({ error: 'User not found' })
//       } else {
//         res.status(200).json(user)
//       }
//     } else {
//       res.status(400).json({ message: 'Bad request' })
//     }
//   },

//   POST: async (req, res) => {
//     if (req.url === '/api/users') {
//       const { username } = req.body
//       try {
//         const user = await prisma.user.create({
//           data: {
//             username,
//           },
//         })
//         res.status(201).json(user)
//       } catch (e) {
//         console.error(e)
//         res.status(500).json({ error: 'Error creating user' })
//       }
//     } else {
//       res.status(400).json({ message: 'Bad request' })
//     }
//   },

//   DELETE: async (req, res) => {
//     if (req.url.startsWith('/api/users/')) {
//       const id = req.url.slice('/api/users/'.length)
//       console.log('Deleting user with id:', id)
//       if (!id || isNaN(Number(id))) {
//         return res.status(400).json({ error: 'Invalid user ID' })
//       }
//       const user = await prisma.user.delete({
//         where: { id: Number(id) },
//       })
//       if (!user) {
//         console.log('User not found with id:', id)
//         res.status(404).json({ error: 'User not found' })
//       } else {
//         console.log('User deleted with id:', id)
//         res.status(204).json({})
//       }
//     } else {
//       res.status(400).json({ message: 'Bad request' })
//     }
//   },
// }

// export default async function handler(req, res) {
//   const method = methods[req.method]

//   if (!method) {
//     res.status(405).json({ message: 'Method not allowed' })
//   } else {
//     method(req, res)
//   }
// }
