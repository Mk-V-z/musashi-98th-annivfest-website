import Layout from '../components/layout'
import styles from '../styles/Steps.module.css'

export default function Steps() {
  return (
    <Layout>
      <h1>第98回記念祭のあゆみ</h1>
      <p className={styles.description}>
        記念祭小委員会では、新型コロナウイルス感染症対応の記録として、小委員会の対応や決定を克明に記録してきました。この資料は第99回記念祭小委員会に参考資料として引き継ぐほか、ここでは資料から抜粋し、「第98回記念祭」が辿った軌跡を残します。
      </p>
      <div className={styles.card}>
        <h2>Feb,</h2>
        <div>
          <p>21th 新型コロナウイルスが記念祭に影響を与える可能性を確認</p>
          <p>29th 期末試験の中止および3月18日までの休校を決定</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Mar,</h2>
        <div>
          <p>03rd 記念祭を6月6日, 7日に延期することを決定</p>
          <p>05th Zoomを利用した記念祭小委員会会合の初開催</p>
          <p>06th フェアキャストにより全校生徒に記念祭延期が伝達</p>
          <p>14th 4月6日までの休校措置継続が決定</p>
          <p>17th SNS・HPを活用した外部向けWeb公開の準備開始</p> 
        </div>
      </div>
      <div className={styles.card}>
        <h2>Apr,</h2>
        <div>
          <p>06th 教師会 登校日の中止, 6月28日への再延期を決定</p>
          <p>08th 東京都等主要都府県に緊急事態宣言が発令</p>
          <p>20th オンライン授業を開始する方針が発表</p>
          <p>22th 第98回記念祭の中止を決定, 記念事業の計画策定開始</p>
          <p>28th 第98回記念祭の中止を発表</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>May,</h2>
        <div>
          <p>07th オンライン授業(Google Classroom)運用開始</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Jun,</h2>
        <div>
          <p>06th 朝日新聞朝刊22面に記念祭中止に係る思いと今後の活動についての記事掲載</p>
          <p>08th 分散登校開始</p>
          <p>15th 始業Week, Classroomによる武蔵グッズ注文受付開始</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Jul,</h2>
        <div>
          <p>31th 1学期終業</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Aug,</h2>
        <div>
          <p>08th 読売新聞オンライン(中学受験サポート)に記念祭小委員会の活動が紹介</p>
          <p>28th 東門に入場門設置, 小委員会撮影</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Sep,</h2>
        <div>
          <p>01st 2学期始業</p>
          <p>23th 記念祭Week開始(〜09.30) 入場門保管展示・グッズ頒布/販売・パンフレット配布・Web公開など</p>
        </div>
      </div>

    </Layout>
  )
}