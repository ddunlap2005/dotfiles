#############################################################
# Generic configuration that applies to all shells
#############################################################
eval "$(/opt/homebrew/bin/brew shellenv)"

test -e ~/.shellvars && source ~/.shellvars
test -e ~/.shellfn && source ~/.shellfn
test -e ~/.shellpaths && source ~/.shellpaths
test -e ~/.shellaliases && source ~/.shellaliases
test -e ~/.iterm2_shell_integration.`basename $SHELL` && source ~/.iterm2_shell_integration.`basename $SHELL`
# Private/Proprietary shell aliases (not to be checked into the public repo) :)
#source ~/Dropbox/Private/Boxes/osx/.shellaliases
