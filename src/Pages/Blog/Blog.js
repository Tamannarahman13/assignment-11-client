import React from 'react';

const Blog = () => {
    return (
        <div>
            <div >
                <h3 className='text-2xl'>1. Difference between SQL and NoSQL</h3>
                <p>1.SQL:SQL databases are primarily called as Relational Databases (RDBMS)</p>
                <p>NoSQL: NoSQL database are primarily called as non-relational or distributed database</p>
                <p>2. SQL: These databases are not suited for hierarchical data storage.</p>
                <p>NoSQL: These databases are best suited for hierarchical data storage.</p>
                <p>3. SQL: Vertically Scalable</p>
                <p>NoSQL: 	Horizontally scalable</p>
                <p>4. SQL: Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
                <p>NoSQL: Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
            </div>
            <div>
                <h3 className='text-2xl'>2. What is jwt? how does it work?</h3>
                <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div>
                <h3 className='text-2xl'>3. What is the difference between javascript and NodeJS?</h3>
                <p>1. Javascript is a programming language that is used for writing scripts on the website. </p>
                <p>NodeJS is a Javascript runtime environment.</p>
                <p>2. Javascript can only be run in the browsers.</p>
                <p>We can run Javascript outside the browser with the help of NodeJS.</p>
                <p>3. Javascript is used in frontend development.</p>
                <p>Nodejs is used in server-side development.</p>
                <p>4. JavaScript is basically used on the client-side.</p>
                <p>NodeJs is mostly used on the server-side.</p>
            </div>
            <div>
                <h3 className='text-2xl'>4. How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;