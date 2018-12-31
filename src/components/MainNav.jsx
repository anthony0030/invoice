import React from 'react';

const MainNav = () => {
  return (

    <div className="bootstrap">
      {/* Fixed navbar */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <span href="#" className="pull-left">
          <img src="assets/img/stamp.png" className="stamp" title="This Stamp belongs To Anthony Veaudry it is one of his Trademarks And he will not be happy if you pass it as your own" />
        </span>
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" title="This is A Web App That was made By Anthony Veaudry For His father Dominique Veaudry For the creation of Proformas and invoices, Free thired party code was used. You Are free to modify And use this work, but not sell it. Anthony Veaudry Takes no responsibility for anything.">Invoice</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" title="File Options">
                  File&nbsp;
                    <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li id="new">
                    <a href="index.html" target="_blank" title="Save or Print File With Browser Dialog">
                      <span className="glyphicon glyphicon-plus">&nbsp;New</span>
                    </a>
                  </li>
                  <li id="import" className="hidden">
                    <a onclick="import_file();">
                      <span className="glyphicon glyphicon-open-file">&nbsp;Open</span>
                    </a>
                  </li>
                  <li id="export">
                    <a onclick="window.print()" title="Save or Print File With Browser Dialog">
                      <span className="glyphicon glyphicon-save-file">&nbsp;Save</span>
                    </a>
                  </li>
                  <li id="new_serial">
                    <a onclick="serial_file();" title="Populate Invoice Number With Unix Time-Stamp">
                      <span className="glyphicon glyphicon-barcode">&nbsp;Serialize</span>
                    </a>
                  </li>
                  <li id="no_serial">
                    <a onclick="un_serial_file();" title="Un-Populate Invoice Number">
                      <span className="glyphicon glyphicon-fire">&nbsp;Un-Serialize</span>
                    </a>
                  </li>
                </ul>
              </li></ul>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" title="Change Language">
                  Language&nbsp;
                    <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li id="en" className="active">
                    <a onclick="changelangen();" title="Change Language to English">
                      <img src="assets/img/flags/en.png" />&nbsp;English
                      </a>
                  </li>
                  <li id="gr" className>
                    <a onclick="changelanggr();" title="Change Language to Greek">
                      <img src="assets/img/flags/gr.png" />&nbsp;Greek
                      </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" title="Enable or Disable Invoice Numbering">
                  Invoice Number&nbsp;
                    <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li id="numon" className="active">
                    <a onclick="changenumon();" title="Enable Invoice Numbering">
                      <img src="assets/img/num/on.png" />&nbsp;ON
                      </a>
                  </li>
                  <li id="numoff" className>
                    <a onclick="changenumoff();" title="Disable Invoice Numbering">
                      <img src="assets/img/num/off.png" />&nbsp;OFF
                      </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" title="Hide or Display Invoice Total">
                  Display Total&nbsp;
                    <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li id="euroon" className="active">
                    <a onclick="changeeuroon();" title="Enable Invoice Number">
                      <img src="assets/img/euro/on.png" />&nbsp;ON
                      </a>
                  </li>
                  <li id="eurooff" className>
                    <a onclick="changeeurooff();" title="Disable Invoice Number">
                      <img src="assets/img/euro/off.png" />&nbsp;OFF
                      </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" title="Change The Logo That Will Be Displayed">
                  Logo&nbsp;
                    <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  {/* change color */}
                  <li id="coloron" className="active">
                    <a onclick="changecoloron();" title="Enable Color For Logo">
                      <img src="assets/img/color/on.png" />&nbsp;ON
                      </a>
                  </li>
                  <li id="coloroff" className>
                    <a onclick="changecoloroff();" title="Disable Color For Logo">
                      <img src="assets/img/color/off.png" />&nbsp;OFF
                      </a>
                  </li>
                  <li role="separator" className="divider" />
                  {/* change language */}
                  <li id="logoen" className="active">
                    <a onclick="changelogolangen();" title="Change Logo To English Version">
                      <img src="assets/img/flags/en.png" />&nbsp;English
                      </a>
                  </li>
                  <li id="logogr" className>
                    <a onclick="changelogolanggr();" title="Change Logo To Greek Version">
                      <img src="assets/img/flags/gr.png" />&nbsp;Greek
                      </a>
                  </li>
                  <li role="separator" className="divider" />
                  {/* change legal logo */}
                  <li id="legalon" className="active">
                    <a onclick="changelogolegalon();" title="Change Logo To Legal Version">
                      <img src="assets/img/legal/on.png" />&nbsp;Legal
                      </a>
                  </li>
                  <li id="legaloff" className>
                    <a onclick="changelogolegaloff();" title="Change Logo To Normal Version">
                      <img src="assets/img/legal/off.png" />&nbsp;Normal
                      </a>
                  </li>
                </ul>
              </li>
              {/* Trigger the modal with a button */}
              <button type="button" className="btn btn btn-lg" data-toggle="modal" data-target="#myModal_0">Setup Wizard !</button>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a onclick="window.print()" title="Save Or Print File With Browser Dialog">
                  <img src="assets/img/print.png" />&nbsp;Print&nbsp;/&nbsp;Save&nbsp;<img src="assets/img/save.png" />
                </a>
              </li>
            </ul>
          </div>
        </div></nav>
    </div>
  );
}
 
export default MainNav;
