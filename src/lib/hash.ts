export default async function hashEmailPassword(email: string, password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(email + password);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}