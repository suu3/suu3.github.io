import postcssCustomMedia from "postcss-custom-media"
import postcssGlobalData from "@csstools/postcss-global-data"

module.exports = {
  plugins: [
    postcssGlobalData({
      files: [
        "src/styles/media-query.css", // 커스텀 미디어 쿼리 파일 경로
      ],
    }),
    postcssCustomMedia(), // 커스텀 미디어 플러그인
  ],
}
