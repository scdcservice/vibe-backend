export function GET(request) {
  return new Response(`Hello from webhook ${JSON.stringify(request, 4)}`);
}
