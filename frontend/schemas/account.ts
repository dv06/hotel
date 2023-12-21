import { defineField } from "sanity";

const account = {
    name: "account",
    title: "Account",
    type: "Document",
    fields: [
        defineField({
            name: 'providerType',
            type: 'string'
        }),
        defineField({
            name: 'providerAccountId',
            type: 'string'
        }),
        defineField({
            name: 'refreshToken',
            type: 'string'
        }),
        defineField({
            name: 'accessToken',
            type: 'string'
        }),
        defineField({
            name: 'accesssTokenExpires',
            type: 'number'
        }),
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference',
            to: {type: 'user'}
        }),
    ]
}

export default account;