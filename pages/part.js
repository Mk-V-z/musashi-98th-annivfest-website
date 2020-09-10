import Layout from '../components/layout'
import Styles from '../styles/Part.module.css'

export default function Part() {
  return (
    <Layout>
      <h1>小委員会紹介</h1>
      <p className={Styles.discription}>
        記念祭小委員会は、一般的な名称としては文化祭実行委員会に相当する期間です。記念祭小委員会を軸として、生徒が主体となって記念祭を準備・運営します。
        <br /><br />
        記念祭小委員会は、毎年6月に行われる校友会選挙によって選出された小委員長が、副小委員長・小委員長補佐・各パート長を任命し組閣します。毎年4月末に行われる記念祭に向けて、顧問の先生のもと生徒が自主的に行い、ほとんどの決裁を小委員会が行います。
      </p>
      <div className={Styles.card}>
        <h2>小委員長</h2>
        <p>記念祭の生徒側責任者として、顧問の先生や学園とも綿密に連携しながら、全業務の進行管理・指揮を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>副小委員長・小委員長補佐</h2>
        <p>書記として小委員会会合に参加しながら、小委員長のサポート・庶務を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>団体パート</h2>
        <p>団体パートは記念祭に出店される団体のアシストをしています。皆さんの武蔵生らしい面白い企画をお待ちしています。</p>
      </div>
      <div className={Styles.card}>
        <h2>警備パート</h2>
        <p>パート本部やテント配置場所の決定、避難訓練の担当でした。変更した動線を試してみたかったです。</p>
      </div>
      <div className={Styles.card}>
        <h2>会計パート</h2>
        <p>校友会から支給される予算、また模擬店や商務の会計など、記念祭における全ての金銭の出納管理を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>企画パート</h2>
        <p>講演会や座談会の出演依頼から準備・運営までを行うほか、武蔵ツアーを実施します。</p>
      </div>
      <div className={Styles.card}>
        <h2>工作パート</h2>
        <p>色々な物を作るパートです。今年は入場門、ステージ背景ボードを制作しました。例年はステージ背景の貼り付けも行なっています。</p>
      </div>
      <div className={Styles.card}>
        <h2>装飾パート</h2>
        <p>ジオラマの作成や案内看板の作成、垂れ幕の設置や飾り付けなど、校内装飾全般を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>資材パート</h2>
        <p>各団体等に資材を貸し出すパートです。学園施設課の方々の協力のもと、準備を進めてきました。</p>
      </div>
      <div className={Styles.card}>
        <h2>ステージパート</h2>
        <p>ステージおよび後夜祭の企画準備・当日の運営を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>模擬店パート</h2>
        <p>保健室・保健所と連携しながら、模擬店の準備運営を行うほか、飲食団体のマネジメントも行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>駄菓子パート</h2>
        <p>駄菓子やポップコーンの販売、縁日の運営を行ないます。くじ引きでは豪華景品を用意する予定でした……（任天堂S▲itch、プリキ○アのお面、武蔵グッズ等々）</p>
      </div>
      <div className={Styles.card}>
        <h2>美化パート</h2>
        <p>期間中の校内清掃やゴミの分別、団体のビラの管理を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>インフォメーションパート</h2>
        <p>校内の総合案内や「武蔵の窓口」の講演・展示を行うほか、最寄り各駅から武蔵までの案内スタッフの配置管理も行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>出席パート</h2>
        <p>記念祭期間中、パート・団体に分かれて所属する全ての高中生徒の出席を取ります。</p>
      </div>
      <div className={Styles.card}>
        <h2>広報パート</h2>
        <p>記念祭公式SNS(Twitter, Instagram)の管理・発信とWebページの制作を行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>デザインパート</h2>
        <p>ロゴデザインから始まり、グッズやパンフレット、ポスター、チケットなどのデザインを行います。</p>
      </div>
      <div className={Styles.card}>
        <h2>商務パート</h2>
        <p>期間中のドリンク・武蔵グッズの販売を行います。今回は記念事業としてグッズの内部販売・配布を行いました。</p>
      </div>
      <div className={Styles.card}>
        <h2>物品印刷パート</h2>
        <p>小冊子の印刷と物品の購入と貸し出しを行っています。耳を苛め抜く仕事です。</p>
      </div>
      <div className={Styles.card}>
        <h2>バザーパート</h2>
        <p>バザー品を集めました。これは来年に繰り越して販売してボランティアをします。お楽しみに！</p>
      </div>
    </Layout>
  )
}