declare module '*.module.css' {
  const css: { readonly [key: string]: string }
  export default css
}

declare module '*.module.less' {
  const less: { readonly [key: string]: string }
  export default less
}