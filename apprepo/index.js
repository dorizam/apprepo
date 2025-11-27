export default function Home() {
  const now = new Date().toLocaleString();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, Next.js SSR!</h1>
      <p>현재 서버 시간: {now}</p>
      <p>EC2 + pm2 + GitHub Actions 자동 배포 실습용 예제</p>
    </div>
  );
}


