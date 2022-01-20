module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/competition/regles',
        destination: '/regles',
        permanent: true,
      },
    ];
  }
}
