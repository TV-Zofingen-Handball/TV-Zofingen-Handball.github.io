#!/usr/bin/env bash

for i in `find . -name "index.md"`; do
  folder=$(echo $i | cut -f2 -d "/")
  img=$(cat "./$folder/index.md" | grep "(https://ha" | sed "s#.*tvzofingen\.ch##" | sed "s#).*##" | sed "s#.*/##")
  if [ ${#img} -gt 0 ]; then
    img_search=$(echo ${img} | sed -E "s/(.*)(\-[0-9]*)(x{1,})([0-9]*)\.(.*)/\1/")
    echo $folder
    echo $img_search
    found=0
    for j in `find ../../static -name "$img_search*"`; do
      echo $j
      image_name=$(echo $j | rev | cut -f1 -d "/" | rev)
      #mkdir "./$folder/images"
      mv $j "./$folder/images/"
      found=1
      #sed -i '' -E "s#categories:#asset:\n  image: \"images/$image_name\"\n\ncategories:#" "./$folder/index.md"
    done
    if [ $found -gt 0 ]; then
      #echo "" >> "./$folder/index.md"
      #echo "" >> "./$folder/index.md"
      #cho "{{< gallery match=\"images/*\" sortOrder=\"desc\" lastRow=\"nojustify\" rowHeight=\"150\" margins=\"5\" thumbnailResizeOptions=\"600x600 q90 Lanczos\" embedPreview=\"true\" >}}" >> "./$folder/index.md"
      #echo "" >> "./$folder/index.md"
      echo "1"
    else
      echo "==========="
      echo $img
    fi
    echo "--"
  fi
  #echo $folder
  #if [[ -f "./$folder/index.md" ]]; then
    #echo $folder
    #mv "./$folder/content.md" "./$folder/index.md"
    #sed -i '' -E "s/authors: (.*)/authors: [\"\1\"]/" "./$folder/index.md"
  #fi
  # if [ -f "./$folder/content.md" ]; then
  #   echo "$folder done"
  # else
  #   echo "$folder TODO"
    # date=$(cat "./$folder/index.md" | grep "^date:" | sed "s/T.*//" | sed "s/date: //")
    # echo $date
    # mv "./$folder/index.md" "./$folder/content.md"
    # cat "./$folder/index.md" | sed "s/^date:/fragment: \"content\"\ndate:/" > "./$folder/content.md"
    # cat "./$folder/content.md" | grep "\-\-\-\|^date:\|title:" > "./$folder/index.md"
  # fi
done
