module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // https://github.com/wting/autojump
    'autojump',
    // alternative to `cat`: https://github.com/sharkdp/bat
    'bat',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    'fzf',
    'readline', // ensure gawk gets good readline
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // upgrade grep so we can get things like inverted match (-v)
    'grep --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    'kops',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    'minicom',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    // 'openconnect',
    'p7zip',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'socat',
    'subversion',
    'telnet',
    'tmux',
    'todo-txt',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-client-server --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'yq'
  ],
  cask: [
    //'adium',
    'adobe-acrobat-reader',
    'adoptopenjdk11',
    'adoptopenjdk8',
    //'amazon-cloud-drive',
    //'atom',
    'balenaetcher',
    'bartender',
    'brave-browser',
    // 'box-sync',
    'cakebrew',
    'cleanmymac',
    //'comicbooklover',
    'daisydisk',
    //'diffmerge',
    'discord',
    'docker', // docker for mac
    //'dropbox',
    //'evernote',
    'fantastical',
    'filebot',
    'firefox',
    'flume',
    //'flux',
    'google-chrome',
    'google-cloud-sdk',
    'gpg-suite',
    //'ireadfast',
    'iterm2',
    'lastpass',
    //'little-snitch',
    // 'macbreakz',
    //'micro-snitch',
    // 'signal',
    //'macvim',
    'messenger',
    'microsoft-office',
    'microsoft-remote-desktop',
    'microsoft-teams',
    'openinterminal',
    'osxfuse',
    'plex',
    'postman',
    'screens',
    //'sizeup',
    //'sketchup',
    'slack',
    'sonos',
    'sourcetree',
    'steam',
    'sublime-text',
    'the-unarchiver',
    //'torbrowser',
    //'transmission',
    'visual-studio-code',
    'vlc',
    'vmware-fusion',
    'whatsapp',
    'xquartz',
    'zoom'
  ],
  gem: [
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'instant-markdown-d',
    // 'generator-dockerize',
    // 'gulp',
    'npm-check-updates',
    'prettyjson',
    'trash',
    'vtop'
    // ,'yo'
  ],
  mas: [
    //com.apple.dt.Xcode (10.2.1)
    '497799835',
    //com.if.Amphetamine (4.1.6)
    //'937984704',
    //net.shinyfrog.bear (1.6.15)
    //'1091189122',
    //com.monosnap.monosnap (3.5.8)
    //'540348655',
    //com.app77.pwsafemac (4.17)
    //'520993579',
  ],
};
