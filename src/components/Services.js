import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
            icon:<FaHiking/>,
            title:"endless hiking",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            { 
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
