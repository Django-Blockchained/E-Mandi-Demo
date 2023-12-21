import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Avi Singh',
        email: 'avi@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Mona Lisa',
        email: 'mona@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
]

export default users;