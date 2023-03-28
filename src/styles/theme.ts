export default {
  grid: {
    container: '130px',
    gutter: '32px'
  },
  border: {
    radius: '4px',
    circle: '100px'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '28px',
      huge: '52px'
    }
  },
  colors: {
    primary: '#0072c0',
    underlay: '#0B7AC6',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    blackOpacity: 'rgba(3, 5, 23, 0.7)'
  },
  spacings: {
    xxsmall: '8px',
    xsmall: '16px',
    small: '24px',
    medium: '32px',
    large: '40px',
    xlarge: '48px',
    xxlarge: '56px',
    huge: '104px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
