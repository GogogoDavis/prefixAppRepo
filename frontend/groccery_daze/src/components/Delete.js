import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/delete/${id}`, {  
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
      .then(navigate('/'));
    }
  }, [id]);
  return (
    <>
      <h2>Post gonezo</h2>
    </>
  );
};
