import React from 'react'

const FieldName = ({ fieldName, text }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 select-none">
      {/* Comment style prefix */}
      <p className="
        font-mono text-xs tracking-wider 
        text-(--accent) opacity-80
      ">
        // {fieldName}
      </p>
      
      {/* Main Section Heading */}
      <h2 className="
        font-sans text-2xl md:text-3xl font-bold tracking-tight 
        text-(--text)
      ">
        {text}
      </h2>
    </div>
  );
};

export default FieldName