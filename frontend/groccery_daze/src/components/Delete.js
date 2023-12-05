import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Delete = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/delete/${id}`, {  
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      });
    }
  }, [id]);
  return (
    <>
      <h2>Post gonezo</h2>
    </>
  );
};
