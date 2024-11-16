export async function enviarEquipaje(data) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${API_URL}Equipaje/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_reserva: data.id_reserva,
        peso_gramos: data.peso,
        volumen_cm: data.volumen,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `Error: ${response.status} - ${errorData.detail || 'Unknown error'}`
      )
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error al enviar datos de:', error)
    throw error
  }
}
