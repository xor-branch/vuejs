class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :content
      t.date :begin_date
      t.date :end_date

      t.timestamps
    end
  end
end
