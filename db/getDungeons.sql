select d.dungeon_id, d.name, d.description, d.type from dungeons d
left join discovered_dungeons f on d.dungeon_id = f.dungeon_id
where f.hero_id = $1