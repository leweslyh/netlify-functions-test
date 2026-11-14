/* 最小回显函数：无需任何 API Key 即可验证函数能接收并返回 JSON */
export const config = { path: '/api/chat' };

export default async function handler(req) {
  let payload = {};
  try { payload = await req.json(); } catch (_) { /* ignore */ }
  const msgs = Array.isArray(payload.messages) ? payload.messages : [];
  const last = msgs.length ? msgs[msgs.length - 1].content : '(无内容)';
  return new Response(JSON.stringify({
    ok: true,
    echo: last,
    note: '这是测试函数回显，未调用真实模型；仅用于验证前后端分离部署是否成功。'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
