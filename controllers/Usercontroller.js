import prisma from "../db.config.js";

export const createUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const finduser = await prisma.user.findUnique({
    where: { email: email },
  });
  if (finduser) {
    return res.json({ message: "User already exists", status: 400 });
  }
  const newuser = await prisma.user.create({
    data: {
      name: name,
      password: password,
      email: email,
    },
  });

  return res.json({ message: "User created successfully", status: 200 });
};
