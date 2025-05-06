// utils/api.ts
export const createPreference = async (): Promise<string> => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!res.ok) {
      throw new Error('Error al crear la preferencia');
    }
  
    const data = await res.json();
    return data.id; // Este debe ser el preferenceId
  };
  