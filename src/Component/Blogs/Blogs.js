import React from 'react';

const Blogs = () => {
    return (
        <div className='row text-white container mx-auto'>
            <div className='col-6'>
                <h4 className='my-4'> Difference between javascript and nodejs</h4>
                <div>
                    <ol className='my-5'>
                        <strong>Javascript</strong>
                        <li>javascript is a programing language for write script</li>
                        <li>javascript  use for client-side</li>
                        <li>primary javascript run only browser</li>

                    </ol>
                    <ol className='my-5'>
                        <strong>Node js</strong>
                        <li>Node js is a runtime of javascript</li>
                        <li>node js use for server-side</li>
                        <li>Now javascript run out side of the browser with help of Node js</li>
                    </ol>
                </div>
            </div>
            <div className='col-6'>
                <h4>When should you use nodejs and when should you use mongodb</h4>
                <ol>
                    <ul className='my-5'>
                        <strong>When should you use nodejs

                        </strong>
                        <li>When application is event driven and i/o intensive base</li>
                        <li>when application perform with API and data without having CUP intensive task or data analysis</li>
                        <li>when my primary programing language is javascript</li>
                    </ul>
                    <ul className='my-5'>
                        <strong>When should you use mongodb</strong>
                        <li>when my data structure is like xml or json</li>
                        <li>when my data structure is like Non-realational</li>
                        <li>Scalability in managing lot's of data</li>
                    </ul>
                </ol>
            </div>
            <div className='col-6'>
                <h4>Differences between sql and nosql databases.</h4>
                <ul>
                    <strong>SQL</strong>
                    <li>SQL Relational database management system</li>
                    <li>This database have predefine schema</li>
                    <li>Vertically Scalable</li>
                </ul>
                <ul>
                    <strong>NOSQL</strong>
                    <li>NOSQL Non-Relational database management system</li>
                    <li>This database have dynamic schema</li>
                    <li>horizontally Scalable</li>
                </ul>
            </div>
            <div className="col-6">
                <h4>What is the purpose of jwt and how does it work</h4>
                <p>
                    JWT or json web token is use for authentication purpose and share data securely server to client.
                    when a user sent request to server server verify who are the user and without saving user data made a jwt and sent it to user . when user next time sent request of a protected page the server check the jwt is valid or not if valid then give the response to the user.
                </p>
            </div>
        </div>
    );
};

export default Blogs;