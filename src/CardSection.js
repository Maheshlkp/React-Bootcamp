import React from 'react';
import Card from './Card';

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="Learn Code Online" description="Description1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
        officiis odit rem provident nobis esse magni! " buttonText="Add Here"/>
          </div>
          <div className="col-4">
          <Card title="W3 Schools Tutorial" description="Description2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
        officiis odit rem provident nobis esse magni!" buttonText="Entroll Here"/>
          </div>
          <div className="col-4">
          <Card title="Clever Programmer" description="Description3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
        officiis odit rem provident nobis esse magni!" buttonText="Join the Course"/>
          </div>
        </div>
      </div>
    </section>
         
 
)

export default CardSection;