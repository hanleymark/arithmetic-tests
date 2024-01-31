import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse('User with this email already exists', {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse('New user successfully created', {
        status: 201,
    });

  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
