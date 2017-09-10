module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      // UI components
      FooterDisclaimer: 'src/components/ui/FooterDisclaimer',
      SocialMediaIcon: 'src/components/ui/SocialMediaIcon',
      LogoBrand: 'src/components/ui/LogoBrand.js',
      Form: 'src/components/ui/Form.js',
      // Section components
      SectionSponsors: 'src/components/section/SectionSponsors.js',
      SectionHowWorks: 'src/components/section/SectionHowWorks',
      SectionDiscount: 'src/components/section/SectionDiscount',
      SectionReviews: 'src/components/section/SectionReviews',
      SectionDeals: 'src/components/section/SectionDeals.js',
      SectionRent: 'src/components/section/SectionRent.js',
      SectionTitle: 'src/components/section/SectionTitle',
      // Widget Components
      SponsorCard: 'src/components/widget/SponsorCard',
      HireCar: 'src/components/widget/HireCar.js',
      DealCard: 'src/components/widget/DealCard',
      StepCard: 'src/components/widget/StepCard',
      // Structure Components
      Footer: 'src/components/structure/Footer',
      Nav: 'src/components/structure/Nav.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
