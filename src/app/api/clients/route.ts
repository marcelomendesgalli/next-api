import { Client } from "./interfaces";

const clients: Client[] = [
    {
        name: 'Josivaldo',
        address: 'Rua da Rua do Josivaldo do lado da Rua do Josinei'
    },
    {
        name: 'Josinei',
        address: 'Rua da Rua do Josinei do lado da Rua do Josivaldo'
    },
    {
        name: 'Josney',
        address: 'Rua da Rua do Josney do lado da Rua do Josinei'
    },
];

export function GET() {
    return Response.json(clients);
}

export function POST() {
    clients.push({
        name: 'Joscreuson',
        address: 'Rua da Rua do Joscreuson do lado da Rua do Josney'
    });
    return Response.json({
        status: "Added",
    });
}