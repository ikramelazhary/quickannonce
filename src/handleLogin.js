const handleLogin = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    if (!role) {
      alert('Please select a role (user or admin) before submitting!');
      return;
    }
  
    // Vérification des identifiants
    if (email === 'admin@example.com' && password === 'admin123' && role === 'admin') {
      // Action de login avec Redux
      dispatch(login({ role: 'admin', token: 'admin-token' }));
      navigate('/admin'); // Redirection vers le dashboard admin
    } else if (email === 'user@example.com' && password === 'user123' && role === 'user') {
      // Action de login avec Redux
      dispatch(login({ role: 'user', token: 'user-token' }));
      navigate('/user'); // Redirection vers le dashboard user
    } else {
      alert('Invalid credentials or role selection!');
    }
  };
  