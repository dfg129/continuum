
export async function run (event: any) {
  
  console.log('event 👉', event);

  return {
    body: JSON.stringify({message: 'Successful lambda invocation now within docker'}),
    statusCode: 200,
  };
}