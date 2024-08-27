export function GET(request) {
  return new Response(`hello from webhook ${JSON.stringify(request, 4)}`);
}
