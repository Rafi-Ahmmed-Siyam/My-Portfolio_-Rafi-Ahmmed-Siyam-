import React from 'react';

const ContainerLayout = ({ children, bg="" }) => {
   return (
      <section className={`${bg} py-24 px-6 `}>
         <div className="max-w-7xl mx-auto">{children}</div>
      </section>
   );
};

export default ContainerLayout;
