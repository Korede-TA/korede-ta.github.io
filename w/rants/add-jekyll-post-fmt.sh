for i in *.md; do
	echo -e "---\nlayout: wikiindex\npost: true\n---\n$(cat $i)" > $i
done
