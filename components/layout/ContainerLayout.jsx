import React from 'react';

const ContainerLayout = ({ children, bg }) => {
   return (
      <section className={`${bg}`}>
         <div className="container mx-auto">{children}</div>
      </section>
   );
};

export default ContainerLayout;
