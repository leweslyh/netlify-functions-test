/* 最小健康检查：验证函数是否被打包上线 */
export const config = { path: '/api/health' };

export default async function handler(req) {
  return new Response(JSON.stringify({
    ok: true,
    service: 'netlify-functions-test',
    region: process.env.AWS_REGION || 'unknown',
    node: process.version,
    time: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
