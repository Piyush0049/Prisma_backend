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

export const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { name, email, password } = req.body;
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      password,
    },
  });
  return res.json({ status: 200, message: "User updated successfully!" });
};

export const deleteUser = async(req, res) => {
  const {id} = req.params;
  const user = await prisma.user.delete({
    where : {
      id: Number(id)
    }
  })
  return res.json({status : 200, message : "user deleted successfully!"})
};
