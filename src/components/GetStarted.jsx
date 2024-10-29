import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './GetStarted.css'

function GetStarted() {

  // 表示するセクションの状態を管理
  const [activeSection, setActiveSection] = useState('features');

  // セクションを切り替える関数
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const navigate = useNavigate();
  const backToTop = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        {/* 固定メニュー */}
        <nav className='navMenu'>
          <ul className="navList">
            <li className="navItem">
              <a href="#" onClick={backToTop} className="navLink">トップへ戻る</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={() => handleSectionChange('features')} className="navLink">特徴</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={() => handleSectionChange('requirements')} className="navLink">動作環境</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={() => handleSectionChange('installation')} className="navLink">インストール手順</a>
            </li>
          </ul>
        </nav>

        {/* 特徴セクション */}
        {activeSection === 'features' && (
          <section>
            <h2>特徴</h2>
            <ul>
              <li>Slackの会話をBacklogの課題として簡単に追加するためのChrome拡張機能です。</li>
              <li>右クリックメニューから簡単にBacklogへSlackのリンクを送信可能。</li>
              <li>BacklogのAPIを使用し、リンクをタスクとして保存します。</li>
            </ul>
          </section>
        )}

        {/* 動作環境セクション */}
        {activeSection === 'requirements' && (
          <section>
            <h2>動作環境</h2>
            <ul>
              <li>Google Chromeブラウザ</li>
              <li>Backlog APIのAPIキー</li>
              <li>Slackのワークスペース</li>
            </ul>
          </section>
        )}

        {/* インストール手順セクション */}
        {activeSection === 'installation' && (
          <section>
            <h2>インストール手順</h2>
            <h3>1. ソースコードのクローン</h3>
            <p>以下のコマンドを使用してリポジトリをクローンします。</p>
            <pre><code>git clone https://github.com/zetton110/slack-embed-for-backlog-chrome-extention.git</code></pre>
            <h3>2. Chrome拡張機能のインストール</h3>
            <p>Chromeの「拡張機能」ページで「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたリポジトリ内のフォルダを選択してください。</p>
            <h3>3. Backlog APIキーの設定</h3>
            <p>BacklogのAPIキーを取得し、拡張機能の設定ページで入力してください。</p>
          </section>
        )}
      </div>
    </>
  )
}

export default GetStarted
