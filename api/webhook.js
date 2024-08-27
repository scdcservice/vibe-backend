export function GET(request) {
  console.log(request);
  return new Response(`Hello from webhook ${JSON.stringify(request, 4)}`);
}

export function POST(request) {
  console.log(request);
  return new Response(`Hello from webhook ${JSON.stringify(request, 4)}`);
}
