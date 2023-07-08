import React from 'react';
import { useLocation } from 'react-router-dom';

export default function User() {
    const {state} = useLocation();
    return <h1>{ state.data }</h1>
  }