class CreateQuestionCatalogs < ActiveRecord::Migration
  def change
    create_table :question_catalogs do |t|
      t.string :question 
      t.timestamps null: false
    end
  end
end
