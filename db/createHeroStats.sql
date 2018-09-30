insert into hero_stats (hero_id, strength, speed, endurance, intelligence, HP, SP, MP, luck, hero_level, hero_exp, extra_stats)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
select * from heroes h
join hero_stats s on h.hero_id = s.hero_id 
where h.hero_id = $1
